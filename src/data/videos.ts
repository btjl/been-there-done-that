export interface VideoTimestamp {
  time: string;        // e.g. "0:45"
  label: string;       // e.g. "Arrive at café"
  lat: number;
  lng: number;
}

export interface LocalizedMetadata {
  [lang: string]: {
    title: string;
    keywords: string[];
  };
}

export interface VideoData {
  id: string;
  youtubeId: string;
  title: string; // default English
  keywords?: string[];
  localized?: LocalizedMetadata;
  timestamps: VideoTimestamp[];
}

export const videos: VideoData[] = [
  {
    id: 'singapore1',
    youtubeId: 'dQw4w9WgXcQ',
    title: 'Exploring Singapore Hidden Cafes',
    keywords: ['singapore', 'cafe', 'explore'],
    localized: {
      zh: {
        title: '探索新加坡的隐藏咖啡馆',
        keywords: ['新加坡', '咖啡馆', '隐藏景点']
      },
      ja: {
        title: 'シンガポールの隠れ家カフェ巡り',
        keywords: ['シンガポール', 'カフェ', '旅行']
      },
    },
    timestamps: [
      { time: '0:30', label: 'Start at Haji Lane', lat: 1.3019, lng: 103.8593 },
      { time: '1:45', label: 'Chye Seng Huat Hardware', lat: 1.3101, lng: 103.8623 },
    ]
  },
  {
    id: 'tokyo1',
    youtubeId: 'abc123tokyo',
    title: 'Tokyo Night Food Tour in Shinjuku',
    keywords: ['tokyo', 'night food', 'shinjuku', 'ramen'],
    localized: {
      zh: {
        title: '东京新宿的夜间美食之旅',
        keywords: ['东京', '夜市', '新宿', '拉面']
      }
    },
    timestamps: [
      { time: '0:15', label: 'Arrive at Omoide Yokocho', lat: 35.6938, lng: 139.7004 },
      { time: '1:10', label: 'Ramen stall #3', lat: 35.692, lng: 139.699 }
    ]
  },

  {
    id: 'paris1',
    youtubeId: 'xyz123paris',
    title: 'Hidden Paris Cafés You Must Visit',
    keywords: ['paris', 'cafe', 'hidden gems'],
    localized: {
      zh: {
        title: '巴黎必去的隐藏咖啡馆',
        keywords: ['巴黎', '咖啡馆', '秘密地点']
      }
    },
    timestamps: [
      { time: '0:40', label: 'Café Loustic', lat: 48.864716, lng: 2.349014 },
      { time: '2:20', label: 'Boot Café', lat: 48.8606, lng: 2.3619 }
    ]
  },

  {
    id: 'seoul1',
    youtubeId: 'seoulvid999',
    title: 'Seoul Vintage Shopping Guide',
    keywords: ['seoul', 'shopping', 'vintage', 'fashion'],
    localized: {
      zh: {
        title: '首尔复古购物指南',
        keywords: ['首尔', '购物', '复古', '时尚']
      }
    },
    timestamps: [
      { time: '1:00', label: 'Dongmyo Flea Market', lat: 37.5744, lng: 127.0163 },
      { time: '2:45', label: 'Vintage shop near Hongdae', lat: 37.5563, lng: 126.922 }
    ]
  },

  {
    id: 'london1',
    youtubeId: 'londonwalk321',
    title: 'Walking Tour Along the Thames River',
    keywords: ['london', 'thames', 'walking tour'],
    localized: {
      zh: {
        title: '泰晤士河沿岸步行之旅',
        keywords: ['伦敦', '泰晤士河', '步行']
      }
    },
    timestamps: [
      { time: '0:20', label: 'Tower Bridge', lat: 51.5055, lng: -0.0754 },
      { time: '1:50', label: 'London Eye', lat: 51.5033, lng: -0.1196 }
    ]
  },

  {
    id: 'bangkok1',
    youtubeId: 'thaifood234',
    title: 'Bangkok Street Food Adventure',
    keywords: ['bangkok', 'street food', 'night market'],
    localized: {
      zh: {
        title: '曼谷街头美食探险',
        keywords: ['曼谷', '小吃', '夜市']
      }
    },
    timestamps: [
      { time: '0:35', label: 'Yaowarat Road', lat: 13.7392, lng: 100.5107 },
      { time: '1:30', label: 'Pad Thai Stall', lat: 13.736, lng: 100.512 }
    ]
  },

  {
    id: 'nyc1',
    youtubeId: 'nycwalk567',
    title: 'Central Park Autumn Walk',
    keywords: ['new york', 'central park', 'autumn', 'nature'],
    localized: {
      zh: {
        title: '中央公园秋季漫步',
        keywords: ['纽约', '中央公园', '秋天', '自然']
      }
    },
    timestamps: [
      { time: '0:25', label: 'Bethesda Terrace', lat: 40.774, lng: -73.9709 },
      { time: '1:15', label: 'The Mall', lat: 40.7736, lng: -73.9715 }
    ]
  },

  {
    id: 'rome1',
    youtubeId: 'colosseumvid333',
    title: 'Walking Through Ancient Rome',
    keywords: ['rome', 'colosseum', 'ancient', 'history'],
    localized: {
      zh: {
        title: '漫步古罗马',
        keywords: ['罗马', '斗兽场', '古迹']
      }
    },
    timestamps: [
      { time: '0:10', label: 'Colosseum', lat: 41.8902, lng: 12.4922 },
      { time: '2:00', label: 'Roman Forum', lat: 41.8925, lng: 12.4853 }
    ]
  },

  {
    id: 'kyoto1',
    youtubeId: 'kyotoTemple01',
    title: 'Kyoto Temple Day Trip Guide',
    keywords: ['kyoto', 'temple', 'travel', 'japan'],
    localized: {
      zh: {
        title: '京都寺庙一日游指南',
        keywords: ['京都', '寺庙', '旅行']
      }
    },
    timestamps: [
      { time: '0:50', label: 'Kinkaku-ji', lat: 35.0394, lng: 135.7292 },
      { time: '1:40', label: 'Ryoan-ji', lat: 35.0331, lng: 135.7188 }
    ]
  },

  {
    id: 'bali1',
    youtubeId: 'balisunsetvid',
    title: 'Bali Sunset Beach Tour',
    keywords: ['bali', 'beach', 'sunset', 'tour'],
    localized: {
      zh: {
        title: '巴厘岛日落海滩之旅',
        keywords: ['巴厘岛', '海滩', '日落']
      }
    },
    timestamps: [
      { time: '1:00', label: 'Seminyak Beach', lat: -8.6909, lng: 115.1564 },
      { time: '2:30', label: 'Echo Beach', lat: -8.6415, lng: 115.1303 }
    ]
  },

  {
    id: 'sydney1',
    youtubeId: 'sydneyharbour123',
    title: 'Cruising Sydney Harbour by Ferry',
    keywords: ['sydney', 'harbour', 'ferry', 'ocean'],
    localized: {
      zh: {
        title: '乘坐渡轮游览悉尼港',
        keywords: ['悉尼', '港口', '轮渡', '海洋']
      }
    },
    timestamps: [
      { time: '0:30', label: 'Sydney Opera House', lat: -33.8568, lng: 151.2153 },
      { time: '1:20', label: 'Harbour Bridge Viewpoint', lat: -33.8523, lng: 151.2108 }
    ]
  }

]



