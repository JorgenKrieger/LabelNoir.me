import type { Metadata } from 'next';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import Gallery from '@/components/gallery';
import Hero from '@/components/hero';
import Media from '@/components/media';
import ProjectIntro from '@/components/projectIntro';
import Text from '@/components/text';

const marqueeData = {
	agency: 'ROX Digital Agency',
	client: 'Baker Tilly',
	year: '2023',
	scope: 'Concepting, UI/UX Design',
};

export const metadata: Metadata = {
	title: 'Baker Tilly - case study by LabelNoir',
};

const Page = () => (
	<main>
		<Hero background="/cases/bakertilly/thumbnail.jpg" dark={false}>
			<h1>A transitional design update</h1>
		</Hero>

		<Marquee autoFill className="border-b border-noir-700 py-6 xl:py-8">
			{Object.entries(marqueeData).map(([key, value]) => (
				<span key={key} className="px-6 text-2xl xl:px-12 xl:text-5xl xl:font-light">
					{value}
					<sup className="ml-1 text-sm capitalize text-noir-300 xl:ml-3 xl:text-3xl">
						({key})
					</sup>
				</span>
			))}
		</Marquee>

		<ProjectIntro
			logo={{
				src: '/cases/bakertilly/logo-mark.svg',
				width: 90,
				height: 90,
			}}
			url="https://bakertilly.nl"
		>
			<p className="intro">
				The Dutch part of Baker Tilly request for ROX was a simple redesign of their website
				in order to make maintainability less costly. Interestingly, during the process, the
				international network rolled out a new design language. With this in mind, the new
				website had to become a bridge to the upcoming rollout later on.
			</p>
		</ProjectIntro>

		<Media>
			<Image
				src="/cases/bakertilly/bt-double-laptop.jpg"
				alt="Two laptops showing parts of the BakerTilly homepage"
				width={2560}
				height={1707}
			/>
		</Media>

		<Text>
			<h2>Shifting the focus</h2>
			<p>
				The original request was pretty basic. Create a new website that's easy to maintain
				and modernizes our look &amp; feel. But with the introduction of the new design
				language a new problem surfaced. How do we create a website that maintains the old
				recognizable identity, while also preparing for the new and upcoming global design
				changes.
			</p>
		</Text>

		<Text>
			<h2>Transitional style</h2>
			<p>
				By blending the two styles into one we managed to create a transitional design
				style. This temporary style's primary function was to introduce the upcoming global
				design changes, while maintaining the recognizable identity that Baker Tilly
				boasted. Besides a smoother transition for clients, this provided the Dutch agencies
				time to finish up supplies like stationeries.
			</p>
		</Text>

		<Gallery>
			<Image
				src="/cases/bakertilly/bt-article.jpg"
				alt="Article mockup on Baker Tilly"
				width={2560}
				height={1707}
			/>
			<Image
				src="/cases/bakertilly/bt-home-mobile.jpg"
				alt=""
				width={1080}
				height={1619}
				sizes="40vw"
			/>
		</Gallery>

		<Text>
			<h2>Final outcome</h2>
			<p>
				The new website has a harmonious blend of styles and previews some of the new global
				design language. Besides the visual language, the information architecture has been
				overhauled to make it easier to navigate the website.
			</p>
		</Text>

		<Media>
			<Image
				src="/cases/bakertilly/bt-medewerker.jpg"
				alt="Medewerker profiel pagina"
				width={2560}
				height={1707}
			/>
		</Media>

		<Media>
			<Image
				src="/cases/bakertilly/about.jpg"
				alt="About Baker Tilly"
				width={1920}
				height={1210}
			/>
		</Media>
	</main>
);

export default Page;
