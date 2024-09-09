"use server";

import { revalidatePath } from "next/cache";
import { deleteTim, updateTim } from "@/queries/tim.query";
import { Tipe } from "@prisma/client";

export async function updateTimForm(data: FormData, id: string) {
  const asal_sekolah = data.get("asal_sekolah") as string;
  const tipe_tim = data.get("tipe_tim") as Tipe; 

  try {
    await updateTim(
      { id },
      {
        asal_sekolah: asal_sekolah,
        tipe_tim: tipe_tim
      }
    );
    revalidatePath("/", "layout");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}

export async function deleteTimForm(id: string) {
  try {
    await deleteTim({ id });
    revalidatePath("/", "layout");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}
