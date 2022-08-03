export interface chats{
    Foto: string
    Producto: string
    Vendedor: string
    id_chat: string
    id_product: string
    messenge: string
}

export interface messenge{
    msg:string
    status:string
    ultimo_mensaje:string
    no_leidos:string
}

export interface sendMessenge{
    fk_id_chat:string
    fk_id_user:string|null
    text_contents:string
}

export interface listMessenge{
    fk_id_user: string
    id_message: string
    text_contents: string
    hourMessenge: string
    dateMessenge: string
}

