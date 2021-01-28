amis.define('docs/zh-CN/components/form/text.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Text 输入框",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "Text 输入框",
    "icon": null,
    "order": 56,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"name\": \"text\",\n            \"type\": \"text\",\n            \"label\": \"text\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B\" href=\"#%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>不同类型</h2><p>配置<code>type</code>可以支持不同格式的文本输入框</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"name\": \"text\",\n            \"type\": \"text\",\n            \"label\": \"text\"\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"url\",\n            \"name\": \"url\",\n            \"label\": \"链接\"\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"email\",\n            \"name\": \"email\",\n            \"label\": \"邮箱\"\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"password\",\n            \"name\": \"password\",\n            \"label\": \"密码\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%99%84%E5%8A%A0%E7%BB%84%E4%BB%B6\" href=\"#%E9%99%84%E5%8A%A0%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>附加组件</h2><p>可以配置<code>addOn</code>，附带附加组件，比如 button，还能设置 icon。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"name\": \"text\",\n            \"type\": \"text\",\n            \"label\": \"text\",\n            \"addOn\": {\n                \"type\": \"button\",\n                \"icon\": \"https://suda.cdn.bcebos.com/images%2F2021-01%2Fsearch.svg\",\n                \"label\": \"搜索\"\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%80%89%E6%8B%A9%E5%99%A8%E6%A8%A1%E5%BC%8F\" href=\"#%E9%80%89%E6%8B%A9%E5%99%A8%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>选择器模式</h2><p>配置<code>options</code>即可支持选择器模式。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"name\": \"text\",\n            \"type\": \"text\",\n            \"label\": \"text\",\n            \"options\": [\n                {\n                    \"label\": \"OptionA\",\n                    \"value\": \"a\"\n                },\n                {\n                    \"label\": \"OptionB\",\n                    \"value\": \"b\"\n                },\n                {\n                    \"label\": \"OptionC\",\n                    \"value\": \"c\"\n                },\n                {\n                    \"label\": \"OptionD\",\n                    \"value\": \"d\"\n                }\n            ]\n\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>选择器模式下，支持部分选择器组件支持的配置项，具体请查看下面的属性表</p>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>当做选择器表单项使用时，除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>options</td>\n<td><code>Array&lt;object&gt;</code>或<code>Array&lt;string&gt;</code></td>\n<td></td>\n<td><a href=\"./options#%E9%9D%99%E6%80%81%E9%80%89%E9%A1%B9%E7%BB%84-options\">选项组</a></td>\n</tr>\n<tr>\n<td>source</td>\n<td><code>string</code>或 <a href=\"../../types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9%E7%BB%84-source\">动态选项组</a></td>\n</tr>\n<tr>\n<td>autoComplete</td>\n<td><code>string</code>或 <a href=\"../../types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8-autocomplete\">自动补全</a></td>\n</tr>\n<tr>\n<td>multiple</td>\n<td><code>boolean</code></td>\n<td></td>\n<td><a href=\"./options#%E5%A4%9A%E9%80%89-multiple\">是否多选</a></td>\n</tr>\n<tr>\n<td>delimeter</td>\n<td><code>string</code></td>\n<td><code>,</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E7%AC%A6-delimiter\">拼接符</a></td>\n</tr>\n<tr>\n<td>labelField</td>\n<td><code>string</code></td>\n<td><code>&quot;label&quot;</code></td>\n<td><a href=\"./options#%E9%80%89%E9%A1%B9%E6%A0%87%E7%AD%BE%E5%AD%97%E6%AE%B5-labelfield\">选项标签字段</a></td>\n</tr>\n<tr>\n<td>valueField</td>\n<td><code>string</code></td>\n<td><code>&quot;value&quot;</code></td>\n<td><a href=\"./options#%E9%80%89%E9%A1%B9%E5%80%BC%E5%AD%97%E6%AE%B5-valuefield\">选项值字段</a></td>\n</tr>\n<tr>\n<td>joinValues</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E5%80%BC-joinvalues\">拼接值</a></td>\n</tr>\n<tr>\n<td>extractValue</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E6%8F%90%E5%8F%96%E5%A4%9A%E9%80%89%E5%80%BC-extractvalue\">提取值</a></td>\n</tr>\n<tr>\n<td>addOn</td>\n<td><code>addOn</code></td>\n<td></td>\n<td>输入框附加组件，比如附带一个提示文字，或者附带一个提交按钮。</td>\n</tr>\n<tr>\n<td>addOn.type</td>\n<td><code>string</code></td>\n<td></td>\n<td>请选择 <code>text</code> 、<code>button</code> 或者 <code>submit</code>。</td>\n</tr>\n<tr>\n<td>addOn.label</td>\n<td><code>string</code></td>\n<td></td>\n<td>文字说明</td>\n</tr>\n<tr>\n<td>addOn.xxx</td>\n<td><code>string</code></td>\n<td></td>\n<td>其他参数请参考按钮文档</td>\n</tr>\n<tr>\n<td>trimContents</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否去除首尾空白文本。</td>\n</tr>\n<tr>\n<td>clearable</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否可清除</td>\n</tr>\n<tr>\n<td>resetValue</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>清除后设置此配置项给定的值。</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本使用",
          "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "不同类型",
          "fragment": "%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B",
          "fullPath": "#%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B",
          "level": 2
        },
        {
          "label": "附加组件",
          "fragment": "%E9%99%84%E5%8A%A0%E7%BB%84%E4%BB%B6",
          "fullPath": "#%E9%99%84%E5%8A%A0%E7%BB%84%E4%BB%B6",
          "level": 2
        },
        {
          "label": "选择器模式",
          "fragment": "%E9%80%89%E6%8B%A9%E5%99%A8%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E9%80%89%E6%8B%A9%E5%99%A8%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
