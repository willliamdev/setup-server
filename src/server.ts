import Fastify from "fastify"
import cors from "@fastify/cors"
import { PrismaClient } from "@prisma/client"

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get("/", async () => {

  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "code"
      }
    }
  })

  return habits
})

app.listen({ port: 3000 }).then(() => {
  console.log(">> http server is running")
})
