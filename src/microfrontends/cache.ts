import { Component } from "@solenopsys/converged-renderer";

import type { ComponentLink } from "../types";

const MODULES_CACHE: { [key: string]: any } = {};
const MICROFRONTENDS_CACHE: { [key: string]: any } = {};

async function loadMicrofronend(importModule: any): Promise<any> {
	console.log("LOAD MICROFRONTEND", importModule);
	const componentsMap = await importModule.createMicrofronend();
	Object.keys(componentsMap).forEach((key) => {
		MICROFRONTENDS_CACHE[key] = componentsMap[key];
	});
}

export async function importModule(importPath: string): Promise<any> {
	console.log("START IMPORT MODULE", importPath);
	return await import(importPath);
}

async function loadModule(importPath: string, createMf = false): Promise<any> {
	if (MODULES_CACHE[importPath]) {
		return MODULES_CACHE[importPath];
	} else {
		const mod = await importModule(importPath);
		
		if (createMf) loadMicrofronend(mod);
		return mod;
	}
}

async function load(importPath: string): Promise<any> {
	return loadModule(importPath, true);
}

export async function resolveComponent<P>(componentName: ComponentLink): Promise<Component<P>> {
	let component = MODULES_CACHE[componentName];
	if (!component) {
		const module = await load(componentName);
		component = module[componentName];
		MODULES_CACHE[componentName] = component;
	}
	return component;
}

async function loadComponent(
	importPath: string,
	componentName: string,
): Promise<any> {
	const module =await importModule(importPath);
	if (module) {
		return module[componentName];
	}
}
