module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    /**
     * off 或 0 - 关闭规则
     * warn 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
     * error 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */

    // 使用单引号
    'quotes': ['error', 'single'],
    // 缩进 switch case缩进缩进4格（4x1）;const let var 对齐缩进;
    'indent': [2, 2, { SwitchCase: 1, VariableDeclarator: 'first' }],
    // 强制驼峰命名；忽略属性名；忽略匹配值
    'camelcase': [2, { properties: 'never', allow: ['^\\$_'] }],
    // 强制使用self为this别名
    'consistent-this': [2, 'self'],
    // 强制使用===,!==
    'eqeqeq': 2,
    // 不使用console
    'no-console': 1,
    // 使用分号
    'semi': ['error', 'always'],
    'no-const-assign': 2, // 禁止修改const声明的变量
    'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if(1)
    'no-debugger': 2, // 禁止使用debugger
    'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, // 函数参数不能重复
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-eval': 1, // 禁止使用eval
    'no-floating-decimal': 2, // 禁止省略浮点数中的0 .5 3.
    'no-multiple-empty-lines': [1, { 'max': 3 }], // 空行最多不能超过2行
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-sparse-arrays': 2, // 禁止稀疏数组， [1,,2]
    'no-trailing-spaces': 1, // 一行结束后面不要有空格
    'no-unused-vars': 0, // 定义但未使用
    'no-undef': 0, // 未定义
    // 'no-empty': 2, // 块语句中的内容不能为空
    // 'no-inline-comments': 0, // 禁止行内备注
    // 'eol-last': ['error', 'never'],

    /**
     * 空格
     */
    'spaced-comment': 2, // 注释 上的空格，//xxx => // xxx
    'no-multi-spaces': 2, // 禁止连续空格
    'no-trailing-spaces': 2, // 禁止行尾空格
    'no-whitespace-before-property': 2, // 禁止点调用有空格 a. b => a.b
    'computed-property-spacing': 2, // 计算属性[]内禁止空格 obj[ i] => obj[i]
    'key-spacing': 2, // 对象键值之间空格
    'keyword-spacing': 2, // 关键字前后空格
    'space-in-parens': [2, 'never'], // 强制小括号()前后不允许空格
    'space-infix-ops': 2, // 强制操作符之间有空格
    'space-unary-ops': [
      2,
      {
        words: true, // 单词类一元操作符之间空格，例：typeof
        nonwords: false, // 符号类不空格，例：++ --
      },
    ],
    'operator-assignment': 2, // 简化赋值操作
    'operator-linebreak': [2, 'before'], // 换行符插入到操作符前面

    /**
     * array
     */
    'array-bracket-spacing': 2, // 强制数组[]括号前后不空格
    'array-bracket-newline': [2, 'consistent'], // []括号换行
    'array-element-newline': [2, 'consistent'], // []元素换行

    /**
     * function
     */
    'func-call-spacing': 2, // 方法调用时，方法名与()不允许空格 func () => func()
    'arrow-spacing': 2, // 要求箭头函数的箭头部分前后的空格
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ], // function方法名和括号之前的空格

    /**
     * .vue
     */
    'vue/block-tag-newline': [
      2,
      {
        singleline: 'always',
        multiline: 'always',
        maxEmptyLines: 1,
      },
    ], // template,script,style标签的结束标签强制换行，允许在一行

    'vue/multi-word-component-names': 0,
    'vue/require-default-prop': 0, // props 设置默认值

    /**
     * template
     */
    'vue/no-v-html': 0, // 允许v-html
    'vue/singleline-html-element-content-newline': 0, // 单行元素内容前后的换行符
    'vue/no-multiple-template-root': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 99, // 一行允许的属性数量
        multiline: 1, // 标签换行后每行允许的单词数量
      },
    ],
  },
};