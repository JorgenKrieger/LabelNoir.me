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
	agency: 'Keplar Agency',
	client: 'Keukenliefde',
	year: '2017',
	scope: 'Concept, Interaction Design',
};

export const metadata: Metadata = {
	title: 'Keukenliefde - case study by LabelNoir',
};

const Page = () => (
	<main>
		<Hero background="cases/keukenliefde/thumbnail.jpg" dark={false}>
			<h1>Spreading the love for cooking</h1>
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

		<ProjectIntro logo="cases/keukenliefde/logo.svg" url="https://keukenliefde.nl">
			<p className="intro">
				Annemiek is a food blogger who delights her visitors with amazing recipes and a view
				inside her kitchen and daily live as a food blogger. For her 5th anniversary, she
				requested Keplar to redesign the website she had since her started capturing her
				food adventures.
			</p>
		</ProjectIntro>

		<Quote>Half cooking, half love. Those are the ingredients to a delicious recipe.</Quote>

		<Media>
			<Image
				src="cases/keukenliefde/kl-home.jpg"
				width={2560}
				height={1707}
				alt="Cooking instructions on Keukenliefde"
			/>
		</Media>

		<Text>
			<h2>Preparations</h2>
			<p>
				For small projects, it's still important to get a clear vision of the business goals
				as well as the user goals. From the first contact with Keplar, the following
				business goals were made clear:
			</p>
			<ol>
				<li>Advertising is the main generator of income</li>
				<li>A new visual identity is required to convey the right feeling</li>
			</ol>
		</Text>

		<Text>
			<h2>Essential ingredients</h2>
			<p>
				By brainstorming about cooking experiences we discovered two key insights. Both
				drooling over delicious recipes as well as getting instructions on how to make them
				are main reasons to visit Keukenliefde. The second insight is that these situations
				the interaction with the device changes.
			</p>
		</Text>

		<Media>
			<Image
				src="cases/keukenliefde/sketches.jpg"
				width={1920}
				height={974}
				alt="Sketches for the wireframes of Keukenliefde"
			/>
		</Media>

		<Text>
			<h2>A two-course meal</h2>
			<p>
				To cook up an amazing experience, we decided to split the website into two courses:
				inspiration and cooking.
			</p>
			<ol>
				<li>
					The first course, inspiration, highlights the many delicious recipes
					Keukenliefde has to offer. In multiple ways, where advertising is one of them,
					you are provided with other recipes that might interest you.
				</li>
				<li>
					The second course helps you during cooking. By focusing on the steps you need to
					take while cooking and removing any distractions to make sure your perfect steak
					won't get burned.
				</li>
			</ol>
		</Text>

		<Gallery>
			<Image
				src="cases/keukenliefde/couch-inspiration.jpg"
				width={1920}
				height={1281}
				alt="Woman searching for inspiration on her tablet"
			/>
			<Image
				src="cases/keukenliefde/cooking-instructions.jpg"
				sizes="50vw"
				width={1920}
				height={1281}
				alt="iPad with cooking instructions"
			/>
		</Gallery>

		<Text>
			<h2>Website</h2>
			<p>
				To combine two opposite directions, a cohesive visual application has been created.
				A minimalistic but playful style that characterizes Annemiek. The color palette has
				been inspired by food, giving the website a finger-licking experience.
			</p>
		</Text>

		<Media>
			<Image
				src="cases/keukenliefde/kl-recipes.jpg"
				width={2560}
				height={1707}
				alt="Overview of pasta based recipes"
			/>
		</Media>
	</main>
);

export default Page;
