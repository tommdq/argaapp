import { NextRequest, NextResponse } from 'next/server'
import { createLocal, getAllLocals } from '../services/locals'

export async function POST(req: NextRequest) {
  try {
    const { proximity, tower, name } = await req.json()

    const newLocal = await createLocal({
      name: name,
      tower: tower,
      proximity: proximity || 0
    })

    if (newLocal) {
      return NextResponse.json({ newLocal })
    } else {
      return NextResponse.json({
        error: 'Faltan campos requeridos para la creacion del local'
      })
    }
  } catch {
    return NextResponse.json({ error: 'No se pudo crear el local' })
  }
}

export async function GET() {
  try {
    const locals = await getAllLocals()

    if (locals) {
      return NextResponse.json({ localList: locals })
    } else {
      return NextResponse.json({ error: 'No existen locales' })
    }
  } catch {
    return NextResponse.json({ error: 'No se pudo consultar los locales' })
  }
}
