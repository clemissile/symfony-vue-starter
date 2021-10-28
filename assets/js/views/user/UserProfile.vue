<template>
	<div class="row">
		<div class="col-md-8">
			<EditUserProfileForm :model="model" />
		</div>
		<div class="col-md-4">
			<UserCard :user="user" />
		</div>
	</div>
</template>

<script>
import EditUserProfileForm from '../../components/Forms/EditUserProfileForm'
import UserCard from '../../components/Cards/UserCard'

export default {
	name: "UserProfile",

	components: {
		EditUserProfileForm,
		UserCard
	},

	data() {
		return {
			model: {
				company: 'Creative Code Inc.',
				email: 'mike@email.com',
				username: 'michael23',
				firstName: 'Mike',
				lastName: 'Andrew',
				address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
				city: 'Melbourne',
				country: 'Australia',
				about: 'Lamborghini Mercy, Your chick she so thirsty, I\'m in that two seat Lambo.'
			},
			user: {
				fullName: 'Mike Andrew',
				title: 'Ceo/Co-Founder',
				description: `Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...`,
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>
