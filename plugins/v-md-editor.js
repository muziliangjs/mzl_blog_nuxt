import Vue from 'vue'
// markdown
import VMdPreview from '@kangc/v-md-editor/lib/preview';
// import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
// 代码赋值
// import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
// 代码 vuepress 主题
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';
// 代码行数
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
VMdPreview.use(createLineNumbertPlugin());
// VMdPreview.use(createCopyCodePlugin());
VMdPreview.use(createHighlightLinesPlugin()); 
VMdPreview.use(vuepressTheme);

Vue.use(VMdPreview); 
