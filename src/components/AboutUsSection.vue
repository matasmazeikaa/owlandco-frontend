<template>
	<div class="section-padding py-64 md:py-120">
		<div class=" max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
			<div class="md:mr-64 md:w-5/12">
				<div class="mb-32">
					<h2 class="text-h4 mb-16 md:text-h3">Owlandco is a property management company with a modern touch in mind</h2>
					<p class="body-2-gray md:body-1-gray">Lorem ipsum dolor sit amet consectetur. Neque facilisi tristique tristique netus est cras. Felis vel sed arcu diam eget luctus.</p>
				</div>
				<Button class="mb-32 md:mb-0">Learn about us</Button>
			</div>

			<div class='w-full md:w-7/12 relative ml-auto flex justify-end max-w-[63rem]'>
				<div class="image-cover-yellow" />
				<NuxtImg
					class='rounded-[4rem] w-full'
					src="/assets/images/woman-typing.png"
					alt="woman sittin on a computer "
				/>
				<div class="absolute left-24 bottom-24 md:left-32 md:bottom-32">
					<p class="text-h6 md:text-h5">John Doe</p>
					<p class="button">Founder & Senior Consultant</p>
				</div>
			</div>
		</div>
	</div>
</template>
