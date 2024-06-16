import { OllamaSettings } from "model/OllamaSettings";

export const DEFAULT_SETTINGS: OllamaSettings = {
  ollamaUrl: "http://localhost:11434",
  defaultModel: "llama3:zh_8b",
  commands:[
    {
      "name": "1-总结选定内容",
      "prompt": "扮演作家的角色。总结文本的关键内容。只输出文本，不要聊天，不要开场白，直奔主题。",
      "model": "llama3:zh_8b"
    },
    {
      "name": "2-解释选定内容",
      "prompt": "扮演作家的角色。用简洁明了的语言解释文本，保持原意。只输出文本，不要聊天，不要开场白，直奔主题。",
      "model": "llama3:zh_8b"
    },
    {
      "name": "3-扩展选定内容",
      "prompt": "扮演作家的角色。通过添加更多细节来扩展文本，保持原意。只输出文本，不要聊天，不要开场白，直奔主题。",
      "model": "llama3:zh_8b"
    },
    {
      "name": "4-重写选定内容（正式）",
      "prompt": "扮演作家的角色。以更正式的风格重写文本，保持原意。只输出文本，不要聊天，不要开场白，直奔主题。",
      "model": "llama3:zh_8b"
    },
    {
      "name": "5-重写选定内容（非正式）",
      "prompt": "扮演作家的角色。以更随意的风格重写文本，保持原意。只输出文本，不要聊天，不要开场白，直奔主题。",
      "model": "llama3:zh_8b"
    },
    {
      "name": "6-重写选定内容（主动语态）",
      "prompt": "扮演作家的角色。以主动语态重写文本，保持原意。只输出文本，不要聊天，不要开场白，直奔主题。",
      "model": "llama3:zh_8b"
    },
    {
      "name": "7-重写选定内容（项目符号）",
      "prompt": "扮演作家的角色。将文本重写为项目符号，保持原意。只输出文本，不要聊天，不要开场白，直奔主题。",
      "model": "llama3:zh_8b"
    },
    {
      "name": "8-为选定内容添加标题",
      "prompt": "扮演作家的角色。为整个文本创建一个标题，让读者能够很好地理解内容。只输出标题，不要聊天，不要开场白，直奔主题。你的格式应该是## 标题。",
      "model": "llama3:zh_8b"
    }
  ],
};
