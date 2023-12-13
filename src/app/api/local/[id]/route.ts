import { NextRequest, NextResponse } from 'next/server'
import { deleteLocal, getLocalById, updateLocal } from '../../services/locals'

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    const { proximity, tower, name } = await req.json()

    const updatedLocal = await updateLocal(Number(id), {
      name: name,
      tower: tower,
      proximity: proximity
    })

    if (updatedLocal) {
      return NextResponse.json({ updatedLocal: updatedLocal })
    } else {
      return NextResponse.json({ error: 'Local no encontrado' })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'No se pudo actualizar el local' })
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id

    const localFinded = await getLocalById(Number(id))

    if (localFinded) {
      return NextResponse.json({ localFinded: localFinded })
    } else {
      return NextResponse.json({ error: 'local no encontrado' })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'No se pudo encontrar el local' })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    const deletedLocal = await deleteLocal(Number(id))
    if (deletedLocal) {
      return NextResponse.json({ deletedLocal: deletedLocal })
    } else {
      return NextResponse.json({ error: 'Local no encontrado' })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'No se pudo eliminar el local' })
  }
}
