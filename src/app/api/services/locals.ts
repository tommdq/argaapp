import { Local, Prisma } from '@prisma/client'
import prisma from '../../../../prisma/client'

export async function createLocal(
  newLocal: Prisma.LocalCreateInput
): Promise<Local> {
  return prisma.local.create({ data: newLocal })
}

export async function getLocalById(localId: number): Promise<Local | null> {
  return prisma.local.findUnique({ where: { id: localId } })
}

export async function getAllLocals(): Promise<Local[]> {
  return prisma.local.findMany()
}

export async function updateLocal(
  localId: number,
  updatedLocal: Prisma.LocalUpdateInput
): Promise<Local | null> {
  return prisma.local.update({ where: { id: localId }, data: updatedLocal })
}

export async function deleteLocal(localId: number): Promise<Local | null> {
  return prisma.local.delete({ where: { id: localId } })
}
