module.exports = {
  token: "MTA2NDQ0Nzc1MTk4NDc5MTU3Mg.GJdD-X.nk8Oqr2lmTvXqBns6zPYVMOGsw7Zbqd9kaELhY",
  prefix: "*",
  mongoURI: "mongodb+srv://SpaceMusic:shivamop@cluster0.kgvij.mongodb.net/Ok?retryWrites=true&w=majority",
  dbl: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0NTAwMzkzNzU0NTcyODAyMSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ4Mzg2MTA4fQ.Yfbrnwfy1SwNIFyZjt5JtOzFiDEFRbkVxyr62PM3VEs",
  BFD: "-",
  owners: [
    {
      name: "King",
      id: "823101214564417536"
    },
    {
      name: "Kangaroo",
      id: "1022180304854728724"
    }
  ],
  supportServer: `https://discord.gg/rKN6cjMeHH`,
  inviteURL: (id) => `https://discord.gg/rKN6cjMeHH`,
  credentials: {
    spotify: {
      clientID: "4b2a3f3c14a041378cae75799597d349",
      clientSecret: "9222247bb10e4736b1ef6db7222639d1"
    }
  },
  timers: {
    playerDeployer: 10000,
    checkQueueDelay: 20000,
    memorySweeper: 60000 * 15,
  },
  regex: {
    spotify: /^(?:https:\/\/open\.spotify\.com\/(?:user\/[A-Za-z0-9]+\/)?|spotify:)(album|playlist|track)(?:[/:])([A-Za-z0-9]+).*$/,
    youtube: /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
    channel: /<#(\d{17,19})>/
  }
}
