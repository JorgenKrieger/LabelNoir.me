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
	client: 'Heijmans Infra',
	year: '2020 & 2021',
	scope: 'UI/UX Design',
};

export const metadata: Metadata = {
	title: 'Heijmans Infra - case study by LabelNoir',
};

const Page = () => (
	<main>
		<Hero background="/cases/heijmans/background.jpeg" dark={false}>
			<h1>Freshening up KCB’s online presence</h1>
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
				src: '/cases/heijmans/logo.svg',
				width: 938,
				height: 438,
			}}
			className="mb-24"
		>
			<p className="intro">
				Besides constructing infrastructure, Heijmans Infra also has a complex network of
				information systems to control all the infrastructure. The in-house development team
				of Heijmans is building custom software for all these apps, so ROX got requested to
				develop a design system to guarantee a good user experience for all these apps.
			</p>
		</ProjectIntro>

		<Media>
			<Image
				src="https://placehold.co/1920x1080/111/ddd.jpg"
				alt=""
				width={1920}
				height={1080}
			/>
		</Media>

		<Text>
			<h2>Problem statement</h2>
			<p></p>

			<p>
				The apps created by Heijmans Infra are very varied in goals and usage. From office
				users to electricians on the road, every person involved should be able to use the
				applications optimally. The new design system should allow users to quickly find the
				information they are looking for without being able to miss important parts.
			</p>
		</Text>

		<Media>
			<Image
				src="https://placehold.co/1920x1080/111/ddd.jpg"
				alt=""
				width={1920}
				height={1080}
			/>
		</Media>

		<Text>
			<h2>Design process</h2>
			<p>
				As the application to real-world products are most important, we started out by
				designing different screens for existing and foreseeable applications. Based on
				these screens we extrapolated components according to the atomic design principle
				and added variations to allow more customization.
			</p>
		</Text>

		<Gallery>
			<Image
				src="https://placehold.co/1920x1920/111/ddd.jpg"
				alt=""
				width={1920}
				height={1920}
			/>
			<Image
				src="https://placehold.co/1920x1920/111/ddd.jpg"
				alt=""
				width={1920}
				height={1920}
			/>
		</Gallery>

		<Text>
			<h2>Final outcome</h2>
			<p>
				With <strong>PatternLab</strong> we created a extensive library of easy to use
				components. Over time, existing applications have been updated to use the new design
				system and new apps are using this design system from the start. Finally, the
				developers of Heijmans named the design system Yellow UI.
			</p>
		</Text>

		<Media>
			<Image
				src="https://placehold.co/1920x1080/111/ddd.jpg"
				alt=""
				width={1920}
				height={1080}
			/>
		</Media>
	</main>
);

export default Page;
