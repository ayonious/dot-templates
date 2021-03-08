const config = {
  common: {
    actions: [
      {
        type: "filereplace",
        files: [
          {
            srcFile: "templates/common/.gitignore",
            destFile: ".gitignore",
          },
          {
            srcFile: "templates/common/.huskyrc.json",
            destFile: ".huskyrc.json",
          },
          {
            srcFile: "templates/common/.prettierignore",
            destFile: ".prettierignore",
          },
          {
            srcFile: "templates/common/.prettierrc",
            destFile: ".prettierrc",
          },
          {
            srcFile: "templates/common/.travis.yml",
            destFile: ".travis.yml",
          },
          {
            srcFile: "templates/common/jestconfig.json",
            destFile: "jestconfig.json",
          },
          {
            srcFile: "templates/common/renovate.json",
            destFile: "renovate.json",
          },
        ],
      },
    ],
  },
  typescript: {
    actions: [
      {
        type: "fileoverrite",
        file: "package.json",
        fields: [
          { field: "main", value: "dist/index.js" },
          { field: "types", value: "dist/index.d.ts" },
          { field: "scripts.build", value: "tsc" },
          { field: "files", value: ["dist"] },
        ],
      },
      {
        type: "packageinstall",
        devDependencies: [
          {
            package: "typescript",
          },
          {
            package: "ts-jest",
          },
          {
            package: "@types/jest",
          },
          {
            package: "typescript",
          },
        ],
      },
      {
        type: "filereplace",
        files: [
          {
            srcFile: "templates/typescript/jestconfig.json",
            destFile: "jestconfig.json",
          },
          {
            srcFile: "templates/typescript/tsconfig.json",
            destFile: "tsconfig.json",
          },
        ],
      },
    ],
  },
};
