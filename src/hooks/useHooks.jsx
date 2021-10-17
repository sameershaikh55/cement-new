import { useState } from "react";

export function useHooks() {
	const [isOpen, setIsOpen] = useState(false);

	return { isOpen, setIsOpen };
}
