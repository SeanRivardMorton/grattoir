"use server";
import { createClient } from "@/utils/supabase/server";
import { AddLiftSchemaType } from "./LiftForm";

export const createLift = async (input: AddLiftSchemaType) => {
  const supabase = createClient();

  const { data, error } = await supabase.from("lifts").upsert(input);

  if (error) {
    console.error(error);
  }

  return data;
};

export const getLift = async (id: number) => {
  const supabase = createClient();

  const { data, error } = await supabase.from("lifts").select().eq("id", id);

  if (error) {
    console.error(error);
  }

  return data;
};

export const getLifts = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from("lifts").select().limit(10);

  if (error) {
    console.error(error);
  }

  return data;
};

export const updateLift = async (input: AddLiftSchemaType) => {
  const supabase = createClient();

  const { data, error } = await supabase.from("lifts").update(input);

  if (error) {
    console.error(error);
  }

  return data;
};

export const deleteLift = async (id: number) => {
  const supabase = createClient();

  const { data, error } = await supabase.from("lifts").delete().eq("id", id);

  if (error) {
    console.error(error);
  }

  return data;
};
