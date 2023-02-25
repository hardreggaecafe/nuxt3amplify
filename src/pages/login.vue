<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async signIn() {
      try {
        const { username, password } = this
        await this.$auth.loginWith('cognito', {
          data: {
            username,
            password,
          }
        })
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
