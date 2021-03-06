import Container from './Container';
import ContainerX from './ContainX';
import Liquid from '../public/svg/liquid.svg';
import Shopify from '../public/svg/shopify.svg';
import Illustrator from '../public/svg/illustrator.svg';
import Photoshop from '../public/svg/photoshop.svg';
import Html from '../public/svg/html.svg';
import Css from '../public/svg/css.svg';
import Vue from '../public/svg/vue.svg';
import React from '../public/svg/react.svg';
import Figma from '../public/svg/figma.svg';
import Tailwindcss from '../public/svg/tailwindcss.svg';
import Javascript from '../public/svg/javascript.svg';
import Firefox from '../public/svg/firefox.svg';
import Git from '../public/svg/git.svg';

const Proficient = () => {
	return (
		<section className='border-b-3'>
			<Container>
				<div className='flex justify-between px-2'>
					<p>my·tools</p>
					<p>003</p>
				</div>

				<div className='py-10 sm:py-16 md2:py-20 lg:py-36'>
					<ContainerX>
						<div className='grid items-center grid-cols-3 gap-x-2 gap-y-6 justify-items-center lg:gap-y-14'>
							<Html className='w-16' />
							<Css className='w-16' />
							<Tailwindcss className='w-20' />

							<Javascript className='w-16' />
							<Vue className='w-16' />
							<React className='w-16' />

							<Git className='w-16' />
							<Figma className='w-12' />
							<Illustrator className='w-16' />

							{/* <Photoshop className='w-16' /> */}

							<Shopify className='w-16' />
							<Liquid className='w-24' />
							<Firefox className='w-16' />
						</div>
					</ContainerX>
				</div>
			</Container>
		</section>
	);
};

export default Proficient;
