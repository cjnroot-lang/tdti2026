// 题库第 7-12 题：关系节奏类
// 约会频率 / 前任出现 / 吵架之后 / 暗恋日常 / 分手风格 / 择偶标准

const questionsBlock2 = [
  {
    tag: { zh: "约会频率", en: "Date Frequency" },
    text: {
      zh: "如果恋爱中对方想天天见，你会？",
      en: "If your partner wants to see you every day, you?",
    },
    options: [
      {
        title: { zh: "求之不得", en: "Dream come true" },
        note: { zh: "如果可以我选 24/7 全天候营业，上线率 100%。", en: "I would choose 24/7 mode if possible. 100% uptime guaranteed." },
        scores: { cling: 2, hope: 1, wall: -2 },
      },
      {
        title: { zh: "可以，但要留点自己的时间", en: "Sure, but I need my own time too" },
        note: { zh: "恋爱很甜，独处也很重要。", en: "Love is sweet, solitude is essential." },
        scores: { logic: 2, cling: -1, drama: -1 },
      },
      {
        title: { zh: "这个节奏有点吓人", en: "That frequency is terrifying" },
        note: { zh: "天天见？我们不是手机应用。", en: "Every day? We are not a subscription service." },
        scores: { wall: 2, hope: -1, cling: -2 },
      },
    ],
  },
  {
    tag: { zh: "前任出现", en: "The Ex Returns" },
    text: {
      zh: "前任最近突然点赞了你的朋友圈，你？",
      en: "Your ex suddenly likes your post. You?",
    },
    options: [
      {
        title: { zh: "脑补一部剧", en: "Write a whole season in my head" },
        note: { zh: "他是不是想复合？还是手滑？还是故意试探？", en: "Are they back? Was it accidental? Are they testing the waters?" },
        scores: { drama: 2, cling: 1, logic: -2 },
      },
      {
        title: { zh: "无视，继续刷", en: "Ignore, keep scrolling" },
        note: { zh: "一个赞而已，别给自己加戏。", en: "It is a like. Not a plot twist." },
        scores: { wall: 2, logic: 1, drama: -1 },
      },
      {
        title: { zh: "顺手也点一个赞回去", en: "Like something of theirs back" },
        note: { zh: "礼貌性回访，不带任何含义。大概。", en: "A courtesy visit. No subtext. Probably." },
        scores: { drama: 1, hope: 1, wall: -1 },
      },
    ],
  },
  {
    tag: { zh: "吵架之后", en: "After a Fight" },
    text: {
      zh: "和恋人吵完架之后，你更可能？",
      en: "After a fight with your partner, you are more likely to?",
    },
    options: [
      {
        title: { zh: "先道歉，怕冷场", en: "Apologize first, afraid of silence" },
        note: { zh: "冷战比吵架更让人窒息。我先破冰，但让步额度有限。", en: "Cold silence suffocates me. I will thaw the ice, but my concessions have a cap." },
        scores: { cling: 2, hope: 1, wall: -1 },
      },
      {
        title: { zh: "等对方来找你", en: "Wait for them to reach out" },
        note: { zh: "和好可以，但台阶必须对方先铺。这是我最后的倔强。", en: "Peace is welcome, but they must lay the first step. It is my final stand." },
        scores: { wall: 2, drama: 1, logic: 1 },
      },
      {
        title: { zh: "冷静分析谁的问题", en: "Coldly analyze whose fault it was" },
        note: { zh: "情绪先放一放，理一下时间线。", en: "Emotions on pause. Let us walk through the timeline." },
        scores: { logic: 2, drama: -1, wall: 1 },
      },
    ],
  },
  {
    tag: { zh: "暗恋日常", en: "Crush Mode" },
    text: {
      zh: "暗恋一个人的时候，你更像？",
      en: "When you have a crush, you are more like?",
    },
    options: [
      {
        title: { zh: "全方位情报收集型", en: "Full recon mode" },
        note: { zh: "从朋友圈到音乐品味，我能三个月内掌握此人全部作息。", en: "From their stories to their playlists, I can map their entire rhythm in three months." },
        scores: { drama: 2, cling: 1, logic: -1 },
      },
      {
        title: { zh: "默默关注型", en: "Silent admirer" },
        note: { zh: "看了所有动态，但一个赞都没给过。", en: "Consumed every story. Liked absolutely none." },
        scores: { wall: 2, hope: 1, cling: 1 },
      },
      {
        title: { zh: "装无事发生型", en: "Business as usual" },
        note: { zh: "暗恋？不存在的。我只是在观察一个有趣样本。", en: "Crush? No. I am merely observing an interesting specimen." },
        scores: { wall: 1, logic: 2, hope: -1 },
      },
    ],
  },
  {
    tag: { zh: "分手风格", en: "Breakup Style" },
    text: {
      zh: "如果需要提分手，你更可能？",
      en: "If you need to end it, you are more likely to?",
    },
    options: [
      {
        title: { zh: "当面说清楚", en: "Say it in person, clearly" },
        note: { zh: "该面对的面对，别留尾巴。", en: "Face it. Leave no loose threads." },
        scores: { hope: -1, logic: 2, wall: -1 },
      },
      {
        title: { zh: "写一段很长的消息", en: "Write a very long message" },
        note: { zh: "嘴会打结，键盘上我是法学博士，逐条论证。", en: "My voice trembles, but my thumbs are a law degree. Point by point." },
        scores: { drama: 1, logic: 1, wall: 1 },
      },
      {
        title: { zh: "慢慢淡出", en: "Slowly fade away" },
        note: { zh: "不是所有结束都需要一个正式的句子。", en: "Not every ending requires a formal sentence." },
        scores: { wall: 2, hope: -1, drama: -1 },
      },
    ],
  },
  {
    tag: { zh: "择偶标准", en: "Type Preferences" },
    text: {
      zh: "你觉得择偶最重要的是？",
      en: "What matters most in a partner?",
    },
    options: [
      {
        title: { zh: "感觉对就行", en: "If it feels right, it is right" },
        note: { zh: "列条件的话，我可能把自己列进去了。", en: "If I listed criteria, I might accidentally describe myself." },
        scores: { hope: 2, drama: 1, logic: -2 },
      },
      {
        title: { zh: "至少要三观合", en: "Values must align" },
        note: { zh: "好看的皮囊千篇一律，能聊的灵魂万里挑一。", en: "Good looks are common. Someone who gets you is rare." },
        scores: { logic: 2, hope: 1, drama: -1 },
      },
      {
        title: { zh: "没有标准，看命", en: "No standards. Up to fate." },
        note: { zh: "反正标准都是给不出现的人准备的。", en: "Standards are for people who have options." },
        scores: { hope: -2, wall: 1, logic: -1 },
      },
    ],
  },
];
