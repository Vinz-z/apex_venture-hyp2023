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
      areas: {
        Row: {
          banner: string | null
          icon: string | null
          id: number
          name: string | null
          short_overview: string | null
          type: string | null
        }
        Insert: {
          banner?: string | null
          icon?: string | null
          id?: number
          name?: string | null
          short_overview?: string | null
          type?: string | null
        }
        Update: {
          banner?: string | null
          icon?: string | null
          id?: number
          name?: string | null
          short_overview?: string | null
          type?: string | null
        }
      }
      Person: {
        Row: {
          address: string | null
          birthday: string | null
          email: string | null
          id: number
          image: string
          longcv: string | null
          name: string
          nationality: string | null
          phone: string | null
          role: string
          shortcv: string | null
        }
        Insert: {
          address?: string | null
          birthday?: string | null
          email?: string | null
          id: number
          image: string
          longcv?: string | null
          name?: string
          nationality?: string | null
          phone?: string | null
          role: string
          shortcv?: string | null
        }
        Update: {
          address?: string | null
          birthday?: string | null
          email?: string | null
          id?: number
          image?: string
          longcv?: string | null
          name?: string
          nationality?: string | null
          phone?: string | null
          role?: string
          shortcv?: string | null
        }
      }
      Project: {
        Row: {
          banner_path: string | null
          id: number
          logo_path: string | null
          name: string | null
          short_overview: string | null
          supervisor: string | null
        }
        Insert: {
          banner_path?: string | null
          id?: number
          logo_path?: string | null
          name?: string | null
          short_overview?: string | null
          supervisor?: string | null
        }
        Update: {
          banner_path?: string | null
          id?: number
          logo_path?: string | null
          name?: string | null
          short_overview?: string | null
          supervisor?: string | null
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
