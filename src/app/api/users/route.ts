import { NextResponse } from 'next/server'
import { createUser, getAllUsers } from '../services/users'

export async function POST(req: Request) {
  try {
    const { email, role, name } = await req.json()

    const newUser = await createUser({
      email: email,
      role: role,
      name: name
    })

    if (newUser) {
      return NextResponse.json({ newUser: newUser })
    } else {
      return NextResponse.json({
        error: 'Faltan campos requeridos para la creacion del usuario'
      })
    }
  } catch {
    return NextResponse.json({ error: 'No se pudo crear el usuario' })
  }
}

export async function GET() {
  try {
    const users = await getAllUsers()

    if (users) {
      return Response.json(users)
    } else {
      return NextResponse.json({ error: 'No existen usuarios' })
    }
  } catch {
    return NextResponse.json({ error: 'No se pudo consultar los usuarios' })
  }
}
