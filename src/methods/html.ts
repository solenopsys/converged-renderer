/* IMPORT */

import htm from "htm";
import createElement from "./create_element";
import { assign } from "../utils/lang";
import type { Child, ComponentsMap, Element, Props } from "../types";

/* HELPERS */

const registry: ComponentsMap = {};
const h = (type: string, props?: Props | null, ...children: Child[]): Element =>
	createElement(registry[type] || type, props, ...children);
const register = (components: ComponentsMap): void =>
	void assign(registry, components);

/* MAIN */

const html = assign(htm.bind(h), { register });

/* EXPORT */

export default html;
