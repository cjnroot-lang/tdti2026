// 题库第 19-24 题：自我认知类
// 社交媒体 / 独处能力 / 双人活动 / 红绿灯 / 恋爱目标 / 情感消耗

const questionsBlock4 = [
  {
    tag: { zh: "社交媒体", en: "Social Media Love" },
    text: {
      zh: "恋爱中你会在朋友圈秀恩爱吗？",
      en: "Would you post couple content on social media?",
    },
    options: [
      {
        title: { zh: "必须有，全世界都该知道", en: "Absolutely. The world deserves to know." },
        note: { zh: "不发的要么是不够爱，要么是鱼太多。", en: "If you do not post, either you do not care or you have too many fish." },
        scores: { drama: 2, cling: 1, hope: 1 },
      },
      {
        title: { zh: "偶尔发一下，克制型", en: "Occasionally. Restrained." },
        note: { zh: "秀恩爱是一种高级的低调。", en: "PDA is an art of subtlety." },
        scores: { logic: 1, drama: 1, wall: 1 },
      },
      {
        title: { zh: "坚决不发", en: "Never posting" },
        note: { zh: "我的恋爱不需要观众。", en: "My love life does not need an audience." },
        scores: { wall: 2, logic: 1, drama: -2 },
      },
    ],
  },
  {
    tag: { zh: "独处能力", en: "Solo Tolerance" },
    text: {
      zh: "连续一个人待三天，你更像？",
      en: "Three days alone. Which you?",
    },
    options: [
      {
        title: { zh: "已经有点想念人了", en: "Already missing human contact" },
        note: { zh: "一个人也还行，但有个人说话就好了。", en: "Alone is fine, but someone to talk to would be nice." },
        scores: { hope: 1, cling: 2, wall: -2 },
      },
      {
        title: { zh: "刚好，充电完成", en: "Perfect. Fully recharged." },
        note: { zh: "三天？再给我三天。", en: "Three days? Give me three more." },
        scores: { wall: 2, logic: 1, hope: -1 },
      },
      {
        title: { zh: "开始在手机上找人聊天", en: "Already seeking chat buddies online" },
        note: { zh: "我不粘人，我只是偶尔需要确认我是活着的。", en: "I am not clingy. I just need to confirm I exist occasionally." },
        scores: { cling: 1, drama: 1, hope: 1 },
      },
    ],
  },
  {
    tag: { zh: "双人活动", en: "Couple Activity" },
    text: {
      zh: "和恋人一起做事情，你更想？",
      en: "Doing things with your partner, you prefer?",
    },
    options: [
      {
        title: { zh: "一起发呆也行", en: "Even staring at the wall together is fine" },
        note: { zh: "重点是有人陪，做什么是次要的。", en: "The point is company. The activity is flexible." },
        scores: { cling: 2, hope: 1, logic: -1 },
      },
      {
        title: { zh: "得有意义才行", en: "It has to be meaningful" },
        note: { zh: "二人世界也得有质量产出，不然感觉在挥霍彼此的寿命余额。", en: "Couple time needs ROI. Otherwise it feels like we are burning life credits together." },
        scores: { logic: 2, drama: -1 },
      },
      {
        title: { zh: "我其实更享受一个人做自己的事", en: "I actually prefer doing my own thing alone" },
        note: { zh: "不是不爱社交，是我自己的事情已经够多了。", en: "Not antisocial. Just already busy with myself." },
        scores: { wall: 2, hope: -1, cling: -2 },
      },
    ],
  },
  {
    tag: { zh: "红绿灯", en: "Green Light" },
    text: {
      zh: "约会对象发了暧昧信号，你通常？",
      en: "Your date sends a flirty signal. You usually?",
    },
    options: [
      {
        title: { zh: "接住，并且加速", en: "Catch it and accelerate" },
        note: { zh: "信号来了我直接超车。", en: "Signal received. I am already overtaking." },
        scores: { hope: 2, drama: 1, wall: -2 },
      },
      {
        title: { zh: "先确认一下是不是信号", en: "Verify if it is actually a signal first" },
        note: { zh: "万一是他群发的呢？", en: "What if it was a group broadcast?" },
        scores: { logic: 2, wall: 1, drama: -1 },
      },
      {
        title: { zh: "假装没看见", en: "Pretend I did not see it" },
        note: { zh: "不是不心动，是怕自己误会。", en: "Not uninterested. Just afraid of misreading." },
        scores: { wall: 2, hope: -1, drama: 1 },
      },
    ],
  },
  {
    tag: { zh: "恋爱目标", en: "Love Goals" },
    text: {
      zh: "你觉得恋爱的终极目标是？",
      en: "What is the ultimate goal of dating?",
    },
    options: [
      {
        title: { zh: "找到那个人，然后在一起", en: "Find the one, then be together" },
        note: { zh: "虽然老套，但我确实就是这么想的。", en: "Unoriginal, but honestly what I believe." },
        scores: { hope: 2, cling: 1, drama: 1 },
      },
      {
        title: { zh: "体验过程，不强求结果", en: "Enjoy the process, no forced outcomes" },
        note: { zh: "好的恋爱本身就是目的。", en: "A good relationship is its own purpose." },
        scores: { logic: 1, hope: 1, wall: 1 },
      },
      {
        title: { zh: "这个问题我看不懂", en: "I do not understand the question" },
        note: { zh: "我的恋爱目标还没有开始设置。", en: "My love settings have not been initialized yet." },
        scores: { wall: 2, hope: -2, logic: -1 },
      },
    ],
  },
  {
    tag: { zh: "情感消耗", en: "Emotional Budget" },
    text: {
      zh: "一段感情结束后，你需要多久恢复？",
      en: "After a relationship ends, how long to recover?",
    },
    options: [
      {
        title: { zh: "很久，情绪战线长", en: "A long time. Extended emotional front." },
        note: { zh: "我不是没走出来，我只是在慢慢收拾残局。", en: "I am not stuck. I am slowly clearing debris." },
        scores: { drama: 2, cling: 1, wall: -1 },
      },
      {
        title: { zh: "转换速度快，下一个更好", en: "Quick pivot. Next will be better." },
        note: { zh: "结束就是开始，我不会在原地等雨停。", en: "An end is a start. I do not wait for rain to stop." },
        scores: { hope: 2, logic: 1, drama: -1 },
      },
      {
        title: { zh: "恢复什么？我本来就没开始", en: "Recover from what? I never started." },
        note: { zh: "这题就好像问我健身房卡到期了心疼不心疼——我根本没去过。", en: "This question is like asking if I miss my gym membership. I never went." },
        scores: { wall: 2, hope: -2, drama: -1 },
      },
    ],
  },
];
