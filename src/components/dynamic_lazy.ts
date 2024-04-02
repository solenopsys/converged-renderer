/* IMPORT */

import useMemo from "../hooks/use_memo";
import createElement from "../methods/create_element";
import resolve from "../methods/resolve";
import $$ from "../methods/SS";
import { resolveComponent } from "../microfrontends/cache";
import type { Child,  FunctionMaybe,ComponentLink } from "../types";



const DynamicLazy = <P = {}>({
	component,
	props,
	children,
}: {
	component: ComponentLink;
	props?: FunctionMaybe<P | null>;
	children?: Child;
}): Child => {
	return useMemo(() => {
        // todo dynamic update
		const comp = resolveComponent<P>(component);
		const element = createElement<P>($$(comp, false), $$(props), children);
		return resolve(element);
	});
};

/* EXPORT */

export default DynamicLazy;
