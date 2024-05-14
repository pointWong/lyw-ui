const { exec } = require('child_process')
const fs = require('fs')

const jsonStr = fs.readFileSync('./src/pages.json', 'utf8')
let pageJson = JSON.parse(jsonStr)


const pageDir = fs.readdirSync('./src/pages')
pageJson.pages = pageDir.map(page => {
  return {
    "path": `pages/${page}/index`,
    "style": {
      "navigationBarTitleText": `${page}`
    }
  }
})

fs.writeFileSync('./src/pages.json', JSON.stringify(pageJson))

pageDir.forEach((page) => {
  if (page !== 'index') {
    const content = fs.readFileSync(`./src/pages/${page}/index.vue`, 'utf8')
    const template = `
    <template>
      <div>代码示例</div>
      <div class="mt-3">
        <highlightjs language="html" :code="code" />
      </div>
    </template>
      <script setup>
      const code = \`${content.replace(/<\/script>/g,'<\\/script>')}\`;
    </script>
    `
    fs.writeFileSync(`./src/components/${page}-des.vue`, template)
  }
})