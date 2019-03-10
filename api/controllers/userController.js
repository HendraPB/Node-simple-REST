'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.index = async (req, res) => {
  const user = await User.find({}).populate('leader').populate('member');
  res.json(user);
};

exports.create = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
};

exports.create_member = async (req, res) => {
  const { userId } = req.params;
  const user = new User(req.body);
  const leader = await User.findById(userId);
  user.leader = leader;
  await user.save();
  await leader.member.push(user._id);
  await leader.save();
  res.json(user);
};

exports.show = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId).populate('leader').populate('member');
  res.json(user);
};

exports.update = async(req, res) => {
  const { userId } = req.params;
  const user = await User.findOneAndUpdate(userId, req.body);
  res.json({ status: 'success', message: 'User successfully updated' });
};

exports.delete = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  if(user.member.length <= 0){
    if(user.leader !== undefined){
      const leader = await User.findById(user.leader);
      await leader.member.remove(user);
      await leader.save();
    }
    await User.deleteOne({ _id: userId });
    res.json({ status: 'success', message: 'User successfully deleted' });
  }
  res.json({ status: 'error', message: 'Can\'t delete a leader' });
};