module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/component/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/component/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/component/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/component/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/index.tsx.hbs'
      }
    ]
  });
};
