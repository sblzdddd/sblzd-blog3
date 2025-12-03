import { LinkPreset, type NavBarLink } from "@/types/config";


export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: "主页",
		icon: "material-symbols:home-outline-rounded",
		url: "/",
	},
	[LinkPreset.About]: {
		name: "关于",
		icon: "material-symbols:account-box-outline",
		url: "/about/",
	},
	[LinkPreset.Archive]: {
		name: "档案",
		icon: "material-symbols:archive-outline-rounded",
		url: "/archive/",
	},
};
