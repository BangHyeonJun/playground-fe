import type { PlopTypes } from "@turbo/gen";
import fs from "node:fs";
import path from "node:path";

const getTemplates = async () => {
	// fetch data from a remote API
	const templates = fs.readdirSync(path.resolve("turbo/generators/templates"));

	return templates;
};

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	// A simple generator to add a new React component to the internal UI library
	plop.setGenerator("create-new-app", {
		description: "새로운 Next.js 앱 프로젝트 생성",
		prompts: [
			{
				type: "list",
				name: "type",
				message: "프로젝트 템플릿을 선택하세요",
				choices: getTemplates,
			},
			{
				type: "input",
				name: "name",
				message: "프로젝트 이름을 입력하세요",
				validate: (input: string) => {
					if (input.includes(".")) {
						return "앱 이름에 . 을 포함할 수 없습니다";
					}
					if (input.includes(" ")) {
						return "앱 이름에 공백을 포함할 수 없습니다";
					}
					if (!input) {
						return "앱 이름은 필수입니다";
					}
					return true;
				},
			},
		],
		actions: [
			{
				type: "addMany",
				templateFiles: "templates/{{ type }}/**/*",
				destination: "{{ turbo.paths.root }}/apps/{{ kebabCase name }}",
				base: "templates/{{ type }}",
			},
		],
	});
}
