import { HexoTipsConfig, TipType } from './types';

export const defaultConfig: HexoTipsConfig = {
  // 原有类型
  warning: {
    icon: '⚠',
    style: {
      border: '#ffb100',
      light: { background: '#fff8e6' },
      dark: { background: '#3d371f' }
    }
  },
  danger: {
    icon: '⛔',
    style: {
      border: '#ff4545',
      light: { background: '#ffeded' },
      dark: { background: '#3d2222' }
    }
  },
  tip: {
    icon: '💡',
    style: {
      border: '#409eff',
      light: { background: '#e6f4ff' },
      dark: { background: '#1f2f3d' }
    }
  },
  mention: {
    icon: '💬',
    style: {
      border: '#b45fff',
      light: { background: '#f3e6ff' },
      dark: { background: '#2f1f3d' }
    }
  },
  recommend: {
    icon: '👍',
    style: {
      border: '#67c23a',
      light: { background: '#e6ffe6' },
      dark: { background: '#1f3d1f' }
    }
  },
  note: {
    icon: '📝',
    style: {
      border: '#9e9e9e',
      light: { background: '#f5f5f5' },
      dark: { background: '#363636' }
    }
  },
  info: {
    icon: 'ℹ️',
    style: {
      border: '#03a9f4',
      light: { background: '#e3f2fd' },
      dark: { background: '#1f313d' }
    }
  },
  success: {
    icon: '✅',
    style: {
      border: '#4caf50',
      light: { background: '#e8f5e9' },
      dark: { background: '#1f3d24' }
    }
  },
  error: {
    icon: '❌',
    style: {
      border: '#f44336',
      light: { background: '#ffebee' },
      dark: { background: '#3d1f22' }
    }
  },
  bug: {
    icon: '🐛',
    style: {
      border: '#e91e63',
      light: { background: '#fce4ec' },
      dark: { background: '#3d1f2a' }
    }
  },
  todo: {
    icon: '📋',
    style: {
      border: '#9c27b0',
      light: { background: '#f3e5f5' },
      dark: { background: '#2f1f3d' }
    }
  },
  example: {
    icon: '🔍',
    style: {
      border: '#ff9800',
      light: { background: '#fff3e0' },
      dark: { background: '#3d311f' }
    }
  },
  quote: {
    icon: '💭',
    style: {
      border: '#607d8b',
      light: { background: '#eceff1' },
      dark: { background: '#1f292d' }
    }
  },
  link: {
    icon: '🔗',
    style: {
      border: '#3f51b5',
      light: { background: '#e8eaf6' },
      dark: { background: '#1f2137' }
    }
  },
  code: {
    icon: '💻',
    style: {
      border: '#616161',
      light: { background: '#fafafa' },
      dark: { background: '#363636' }
    }
  },
  update: {
    icon: '🔄',
    style: {
      border: '#009688',
      light: { background: '#e0f2f1' },
      dark: { background: '#1f3734' }
    }
  },
  star: {
    icon: '⭐',
    style: {
      border: '#ffd700',
      light: { background: '#fffde7' },
      dark: { background: '#3d3a1f' }
    }
  },
  time: {
    icon: '⌛',
    style: {
      border: '#795548',
      light: { background: '#efebe9' },
      dark: { background: '#332824' }
    }
  },
  
  // 新增类型
  critical: {
    icon: '🚨',
    style: {
      border: '#dc3545',
      light: { background: '#f8d7da' },
      dark: { background: '#721c24' }
    }
  },
  important: {
    icon: '🔥',
    style: {
      border: '#fd7e14',
      light: { background: '#fff3cd' },
      dark: { background: '#664d03' }
    }
  },
  caution: {
    icon: '⚡',
    style: {
      border: '#ffc107',
      light: { background: '#fff3cd' },
      dark: { background: '#664d03' }
    }
  },
  highlight: {
    icon: '🌟',
    style: {
      border: '#20c997',
      light: { background: '#d1ecf1' },
      dark: { background: '#0a3622' }
    }
  },
  reference: {
    icon: '📚',
    style: {
      border: '#6610f2',
      light: { background: '#e2e3ff' },
      dark: { background: '#2d1b69' }
    }
  },
  summary: {
    icon: '📊',
    style: {
      border: '#198754',
      light: { background: '#d4edda' },
      dark: { background: '#051b11' }
    }
  },
  detail: {
    icon: '🔬',
    style: {
      border: '#0dcaf0',
      light: { background: '#cff4fc' },
      dark: { background: '#055160' }
    }
  },
  formula: {
    icon: '🧮',
    style: {
      border: '#6f42c1',
      light: { background: '#e2e3ff' },
      dark: { background: '#2d1b69' }
    }
  },
  question: {
    icon: '❓',
    style: {
      border: '#0d6efd',
      light: { background: '#cfe2ff' },
      dark: { background: '#031633' }
    }
  },
  answer: {
    icon: '✔️',
    style: {
      border: '#198754',
      light: { background: '#d4edda' },
      dark: { background: '#051b11' }
    }
  }
};

export const tipTypes: TipType[] = [
  'warning', 'danger', 'tip', 'mention', 'recommend', 'note', 'info', 
  'success', 'error', 'bug', 'todo', 'example', 'quote', 'link', 
  'code', 'update', 'star', 'time', 'critical', 'important', 'caution',
  'highlight', 'reference', 'summary', 'detail', 'formula', 'question', 'answer'
];