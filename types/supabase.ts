export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Area: {
        Row: {
          banner_path: string | null
          icon_path: string | null
          id: number
          name: string | null
        }
        Insert: {
          banner_path?: string | null
          icon_path?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          banner_path?: string | null
          icon_path?: string | null
          id?: number
          name?: string | null
        }
      }
      Project: {
        Row: {
          banner_path: string | null
          id: number
          logo_path: string | null
          name: string | null
          short_overview: string | null
        }
        Insert: {
          banner_path?: string | null
          id?: number
          logo_path?: string | null
          name?: string | null
          short_overview?: string | null
        }
        Update: {
          banner_path?: string | null
          id?: number
          logo_path?: string | null
          name?: string | null
          short_overview?: string | null
        }
      }
      Project_Area_mapping: {
        Row: {
          area_id: number
          project_id: number
        }
        Insert: {
          area_id: number
          project_id?: number
        }
        Update: {
          area_id?: number
          project_id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
