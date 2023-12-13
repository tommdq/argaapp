import { Prisma, User } from '@prisma/client'
import prisma from '../../../../prisma/client'

export async function createUser(
  newUser: Partial<Prisma.UserCreateInput>
): Promise<User> {
  return prisma.user.create({ data: newUser as Prisma.UserCreateInput })
}

export async function getUserById(userId: number): Promise<User | null> {
  return prisma.user.findUnique({ where: { id: userId } })
}

export async function getAllUsers(): Promise<User[]> {
  return prisma.user.findMany()
}

export async function updateUser(
  userId: number,
  updatedUser: Prisma.UserUpdateInput
): Promise<User | null> {
  return prisma.user.update({ where: { id: userId }, data: updatedUser })
}

export async function deleteUser(userId: number): Promise<User | null> {
  return prisma.user.delete({ where: { id: userId } })
}
