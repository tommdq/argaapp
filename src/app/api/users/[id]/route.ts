import { NextResponse } from 'next/server'
import { deleteUser, getUserById, updateUser } from '../../services/users'

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { email, role, name } = await req.json()
    const id = params.id

    const updatedUser = await updateUser(Number(id), {
      email: email,
      role: role,
      name: name
    })

    if (updatedUser) {
      return NextResponse.json({ userUpdated: updatedUser })
    } else {
      return NextResponse.json({ error: 'Usuario no encontrado' })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'No se pudo actualizar el usuario' })
  }
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id

    const userFinded = await getUserById(Number(id))

    if (userFinded) {
      return NextResponse.json({ userFinded: userFinded })
    } else {
      return NextResponse.json({ error: 'Usuario no encontrado' })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'No se pudo encontrar el usuario' })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    const deletedUser = await deleteUser(Number(id))
    if (deletedUser) {
      return NextResponse.json({ userDeleted: deletedUser })
    } else {
      return NextResponse.json({ error: 'Usuario no encontrado' })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'No se pudo eliminar el usuario' })
  }
}
