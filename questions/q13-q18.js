// 题库第 13-18 题：行为模式类
// 朋友评价 / 消息回复 / 理想周末 / 表白被拒 / 恋爱节奏 / 礼物心思

const questionsBlock3 = [
  {
    tag: { zh: "朋友评价", en: "Friend Review" },
    text: {
      zh: "朋友怎么评价你的恋爱风格更贴切？",
      en: "Which review fits your dating style better?",
    },
    options: [
      {
        title: { zh: "一恋爱就没影了", en: "Disappears the second they start dating" },
        note: { zh: "我不是消失了，我只是把所有带宽给一个人了。", en: "I did not vanish. I just reallocated all bandwidth." },
        scores: { cling: 2, hope: 1, wall: -2 },
      },
      {
        title: { zh: "永远在分析", en: "Always analyzing" },
        note: { zh: "别人在心动，我在做 SWOT 分析。", en: "While others feel butterflies, I run a SWOT analysis." },
        scores: { logic: 2, hope: -1, drama: -1 },
      },
    ],
  },
  {
    tag: { zh: "消息回复", en: "Reply Speed" },
    text: {
      zh: "对方半小时没回消息，你的内心戏更接近？",
      en: "They have not replied in 30 minutes. Your inner monologue is closer to?",
    },
    options: [
      {
        title: { zh: "在忙吧，等着", en: "Probably busy. Waiting calmly." },
        note: { zh: "可能他手机掉马桶了、被老板抓走了、或者信号被黑洞吞了。总之不是不想回我。", en: "Maybe their phone fell in the toilet. Or the boss grabbed them. Or a black hole ate the signal. Definitely not ignoring me." },
        scores: { logic: 1, wall: 1, cling: -1 },
      },
      {
        title: { zh: "构思一整篇文章", en: "Drafting an entire essay" },
        note: { zh: "是我说错话了？还是他看到了更好的对话框？", en: "Did I say something wrong? Or did a better chat appear?" },
        scores: { drama: 2, cling: 1, logic: -2 },
      },
      {
        title: { zh: "无所谓，我也忘了回", en: "Does not matter. I forgot to reply too." },
        note: { zh: "消息自由是双向的。", en: "Message freedom goes both ways." },
        scores: { wall: 2, hope: -1, cling: -1 },
      },
    ],
  },
  {
    tag: { zh: "理想周末", en: "Ideal Weekend" },
    text: {
      zh: "理想周末更接近？",
      en: "Your ideal weekend is closer to?",
    },
    options: [
      {
        title: { zh: "和恋人一起窝着", en: "Cuddling with my person" },
        note: { zh: "有个人类在身边的沙发就是环球影城，人形抱枕自带五星好评。", en: "A couch with another human on it is my Universal Studios. Five-star cuddle rating." },
        scores: { cling: 2, hope: 1, wall: -2 },
      },
      {
        title: { zh: "约朋友出去社交", en: "Out with friends" },
        note: { zh: "恋爱可以搁置，饭搭子一天都不能少。精神支柱靠朋友先顶着。", en: "Romance can wait. Brunch buddies cannot. Friends are my emotional scaffolding." },
        scores: { hope: 1, drama: 1, logic: -1 },
      },
      {
        title: { zh: "一个人待着最爽", en: "Solo mode is peak mode" },
        note: { zh: "一个人的下午是奢侈，不是缺憾。", en: "A solo afternoon is a luxury, not a lack." },
        scores: { wall: 2, hope: -1, logic: 1 },
      },
    ],
  },
  {
    tag: { zh: "表白被拒", en: "Confession Rejected" },
    text: {
      zh: "如果你表白被拒了，你更像？",
      en: "If your confession is rejected, you are more like?",
    },
    options: [
      {
        title: { zh: "难过一阵，然后继续生活", en: "Sad for a bit, then move on" },
        note: { zh: "被拒不是世界末日，是人生素材。", en: "Rejection is not the end of the world. It is content." },
        scores: { hope: 1, logic: 1, wall: 1 },
      },
      {
        title: { zh: "彻底社死，换一个星球生活", en: "Total social death. Need a new planet." },
        note: { zh: "我可能需要物理搬迁到另一个城市。", en: "I may need to physically relocate to a different city." },
        scores: { drama: 2, wall: 1, hope: -1 },
      },
      {
        title: { zh: "不会表白的所以不存在这个问题", en: "That scenario does not exist for me" },
        note: { zh: "我的人生剧本里没有表白这个章节。", en: "My life script has no confession chapter." },
        scores: { wall: 2, hope: -2, drama: -1 },
      },
    ],
  },
  {
    tag: { zh: "恋爱节奏", en: "Pacing" },
    text: {
      zh: "你谈恋爱的节奏更像？",
      en: "Your love pacing is closer to?",
    },
    options: [
      {
        title: { zh: "闪电式，三天觉得会结婚", en: "Lightning. Three days in, planning the wedding" },
        note: { zh: "来的时候挡不住，走的时候也别拦我。", en: "When it hits, it hits. When it leaves, do not block the exit." },
        scores: { drama: 2, hope: 1, cling: 1 },
      },
      {
        title: { zh: "温水煮青蛙式", en: "Slow boil" },
        note: { zh: "我不急，但也别让我等太久。", en: "I am not rushing, but do not make me wait forever." },
        scores: { logic: 1, hope: 1, drama: -1 },
      },
      {
        title: { zh: "没有节奏，因为还没开始", en: "No tempo yet. Has not started." },
        note: { zh: "恋爱节奏这个词对我来说还是一个理论概念。", en: "Love pacing is still a theoretical concept for me." },
        scores: { wall: 2, hope: -2, drama: -1 },
      },
    ],
  },
  {
    tag: { zh: "礼物心思", en: "Gift Energy" },
    text: {
      zh: "给恋人准备礼物时，你更像哪种人？",
      en: "When picking a gift for your partner, which are you?",
    },
    options: [
      {
        title: { zh: "提前一个月就开始想", en: "Planning starts a month early" },
        note: { zh: "我能在礼物上投入的想象力比恋爱本身还多。", en: "I put more imagination into the gift than into the relationship itself." },
        scores: { drama: 1, cling: 2, hope: 1 },
      },
      {
        title: { zh: "当天随便买点什么", en: "Grab something on the day" },
        note: { zh: "心意到了就行，形式不重要。", en: "The thought counts. The format is flexible." },
        scores: { logic: 1, wall: 1, drama: -1 },
      },
      {
        title: { zh: "没有恋人所以也不用送", en: "No partner, no gifts needed" },
        note: { zh: "我就把钱省下来犒劳自己了。", en: "I redirect the budget to myself." },
        scores: { wall: 1, hope: -1, logic: 1 },
      },
    ],
  },
];
