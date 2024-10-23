import type { Metadata } from 'next';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import Gallery from '@/components/gallery';
import Hero from '@/components/hero';
import Media from '@/components/media';
import ProjectIntro from '@/components/projectIntro';
import Quote from '@/components/quote';
import Text from '@/components/text';

const marqueeData = {
	agency: 'ROX Digital Agency',
	client: 'Kwaliteits-Controle-Bureau',
	year: '2024',
	scope: 'UI/UX Design',
};

export const metadata: Metadata = {
	title: 'KCB - case study by LabelNoir',
};

const Page = () => (
	<main>
		<Hero background="/cases/kcb/hero.jpg" dark={false} className="object-[50%,16.25%]">
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
				src: '/cases/kcb/logo.png',
				width: 320,
				height: 320,
			}}
			url="https://kcb.nl"
		>
			<p className="intro">
				KCB is an agency tasked by the Dutch government to safeguard the quality of plants,
				flowers and food for export and consumption. They’ve requested ROX to revitalize
				their website. Together, we’ve rooted out the complexity and took a modern approach
				to make the new website accessible to everyone involved.
			</p>
		</ProjectIntro>

		<Quote>This really brings KCB into 2024.</Quote>

		<Media>
			<Image
				src="/cases/kcb/laptop-home.jpg"
				width={2560}
				height={1707}
				alt="Desktop mockups"
			/>
		</Media>

		<Text>
			<h2>Problem statement</h2>
			<p>
				The challenges KCB faced were three-fold. Outdated technical capabilities, confusing
				information architecture and accessibility. As KCB is an organization tasked by the
				government and meant every farmer with these products was mandated to subject to
				qualifications by KCB. As information regarding this was hard to find, we
				prioritized improving the information architecture and content plan.
			</p>
		</Text>

		<Media>
			<Image
				src="/cases/kcb/wireframes.jpg"
				width={1920}
				height={800}
				alt="Wireframes for the KCB website"
			/>
		</Media>

		<Text>
			<h2>Design process</h2>
			<p>
				With a hybrid of a sitemap and flow chart, we mapped out the types of pages and
				content required to provide all required information, as well as allow for plenty of
				growth. After solidifying the information architecture in a wireframe prototype, we
				started putting focus on the visual aspect. With accessibility in mind, we created a
				layout that utilized modern design trends and created visual appealing pages without
				the need for an extensive library of imagery.
			</p>
		</Text>

		<Gallery>
			<Image
				src="/cases/kcb/laptop-vacature.jpg"
				width={2560}
				height={1707}
				alt="Vacature detail pagina"
				sizes="60vw"
			/>
			<Image
				src="cases/kcb/kcb-mobile-detail-mockup.jpg"
				alt=""
				width={1280}
				height={1920}
				sizes="40vw"
			/>
		</Gallery>

		<Text>
			<h2>Final outcome</h2>
			<p>
				The final deliverable resulted in a website with enough room for growth. As the
				project has only recently launched, further insights still need to be gathered.{' '}
			</p>
		</Text>

		<Media>
			<Image
				src="/cases/kcb/laptop-multiple.jpg"
				width={2560}
				height={1707}
				alt="Multiple laptops with mockups"
			/>
		</Media>

		<Media>
			<Image
				src="/cases/kcb/inspection.jpg"
				width={1920}
				height={1280}
				alt="Person inspecting fruits"
			/>
		</Media>
	</main>
);

export default Page;
