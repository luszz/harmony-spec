import{_ as a,c as t,o as e,a1 as n}from"./chunks/framework.DemCe7eJ.js";const m=JSON.parse('{"title":"harmony-spec","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md"}'),r={name:"guide/getting-started.md"},i=n('<h1 id="harmony-spec" tabindex="-1">harmony-spec <a class="header-anchor" href="#harmony-spec" aria-label="Permalink to &quot;harmony-spec&quot;">​</a></h1><p>前端编码规范工程化</p><h2 id="能力支持" tabindex="-1">🎉 能力支持 <a class="header-anchor" href="#能力支持" aria-label="Permalink to &quot;:tada: 能力支持&quot;">​</a></h2><h3 id="_1-全面的前端生态" tabindex="-1">1. 全面的前端生态 <a class="header-anchor" href="#_1-全面的前端生态" aria-label="Permalink to &quot;1. 全面的前端生态&quot;">​</a></h3><p>支持前端全部生态，无需关注环境，支持直接使用</p><h3 id="_2-完善的规范配件" tabindex="-1">2. 完善的规范配件 <a class="header-anchor" href="#_2-完善的规范配件" aria-label="Permalink to &quot;2. 完善的规范配件&quot;">​</a></h3><p>支持对全部前端配置实现一键接入、一键扫描、一键修复、一键升级</p><h3 id="_3-完整的测试用例" tabindex="-1">3. 完整的测试用例 <a class="header-anchor" href="#_3-完整的测试用例" aria-label="Permalink to &quot;3. 完整的测试用例&quot;">​</a></h3><p>配套完整的测试用例，提升项目健壮性</p><h2 id="配套工具" tabindex="-1">🛋️ 配套工具 <a class="header-anchor" href="#配套工具" aria-label="Permalink to &quot;:couch_and_lamp: 配套工具&quot;">​</a></h2><p>引入了多个业界流行的 <code>Linter</code> 作为规范文档的配套工具，并根据规范内容定制了对应的规则包，它们包括：</p><table tabindex="0"><thead><tr><th>规范</th><th>Lint 工具</th><th>npm 包</th></tr></thead><tbody><tr><td>JavaScript 编码规范 <br> TypeScript 编码规范 <br> Node 编码规范</td><td><a href="https://eslint.org/" target="_blank" rel="noreferrer">ESLint</a></td><td><a href="https://www.npmjs.com/package/eslint-config-harmony" target="_blank" rel="noreferrer">eslint-config-harmony</a></td></tr><tr><td>CSS 编码规范</td><td><a href="https://stylelint.io/" target="_blank" rel="noreferrer">stylelint</a></td><td><a href="https://www.npmjs.com/package/stylelint-config-harmony" target="_blank" rel="noreferrer">stylelint-config-harmony</a></td></tr><tr><td>Git 规范</td><td><a href="https://commitlint.js.org/#/" target="_blank" rel="noreferrer">commitlint</a></td><td><a href="https://www.npmjs.com/package/commitlint-config-harmony" target="_blank" rel="noreferrer">commitlint-config-harmony</a></td></tr><tr><td>文档规范</td><td><a href="https://github.com/DavidAnson/markdownlint" target="_blank" rel="noreferrer">markdownlint</a></td><td><a href="https://www.npmjs.com/package/markdownlint-config-harmony" target="_blank" rel="noreferrer">markdownlint-config-harmony</a></td></tr><tr><td>Eslint 插件</td><td><a href="https://eslint.org/docs/latest/extend/plugins" target="_blank" rel="noreferrer">ESlint Plugin</a></td><td><a href="https://www.npmjs.com/package/eslint-plugin-harmony" target="_blank" rel="noreferrer">eslint-plugin-harmony</a></td></tr></tbody></table><p><a href="https://www.npmjs.com/package/harmony-spec-lint" target="_blank" rel="noreferrer">harmony-spec-lint</a> 收敛屏蔽了上述依赖和配置细节，提供简单的 <code>CLI</code> 和 <code>Node.js API</code>，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规范的成本。</p><p>您可以使用<a href="https://www.npmjs.com/package/harmony-spec-lint" target="_blank" rel="noreferrer">harmony-spec-lint</a> 方便地为项目接入全部规范。</p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><h2 id="测试markdown-config" tabindex="-1">测试<code>markdown config</code> <a class="header-anchor" href="#测试markdown-config" aria-label="Permalink to &quot;测试`markdown config`&quot;">​</a></h2><p>全局安装<code>markdownlint-cli</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> markdownlint-cli</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lint</span></span></code></pre></div><h3 id="生成changelog" tabindex="-1">生成<code>CHANGELOG</code> <a class="header-anchor" href="#生成changelog" aria-label="Permalink to &quot;生成`CHANGELOG`&quot;">​</a></h3><p>参考<a href="https://www.npmjs.com/package/conventional-changelog-cli" target="_blank" rel="noreferrer">conventional-changelog-cli</a>，全局安装<code>conventional-changelog-cli</code>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conventional-changelog-cli</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changelog</span></span></code></pre></div><h2 id="联系" tabindex="-1">📧 联系 <a class="header-anchor" href="#联系" aria-label="Permalink to &quot;:email: 联系&quot;">​</a></h2><ul><li><strong>前端编码规范工程化</strong> <a href="https://luszz.github.io/harmony-spec/" target="_blank" rel="noreferrer">https://luszz.github.io/harmony-spec/</a></li><li><strong>GitHub</strong>: <a href="https://github.com/luszz/harmony-spec" target="_blank" rel="noreferrer">https://github.com/luszz/harmony-spec</a></li></ul>',23),s=[i];function l(o,h,d,c,p,g){return e(),t("div",null,s)}const b=a(r,[["render",l]]);export{m as __pageData,b as default};
