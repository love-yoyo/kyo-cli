const renamer = require('metalsmith-renamer');

module.exports = {
    prompts: {
        route: {
            type: "confirm",
            message: "是否使用route",
        },
        // isCustomName: {
        //     type: "confirm",
        //     message: "是否自定义系统名称？",
        // },
        // sysName: {
        //     type: "input",
        //     when: "isCustomName",
        //     default: "默认系统名称",
        //     message: "请输入系统名称:",
        //     required: true,
        //     validate: function(val) {
        //         if (!val) return '(✘) 请输入系统名称，该名称将设为 index.html 的 title';
        //         return true;
        //     },
        // },
    },
    filters: {
        'src/route/**/*': 'route'
    },
    metalsmith: function(metalsmith, opts, helpers) {
        metalsmith.use(renamer({
            index: {
                pattern: 'src/**/*',
                rename: function(fileName) {
                    console.log(fileName);
                    return fileName.replace('_page', 'demo');
                }
            }
        }))
    }
}