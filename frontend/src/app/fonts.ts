import { Mulish, Marcellus, Poppins } from "next/font/google"

export const mulish = Mulish({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
})

export const marcellus = Marcellus({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
})

export const poppins = Poppins({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
})
