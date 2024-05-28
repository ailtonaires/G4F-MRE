import React, { useEffect, useState } from "react";
import "./Noticias.css";
import { api } from "../../config/api";

const Noticias = () => {
  const [noticias, setNoticias] = useState([] as any[]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitulo, setEditTitulo] = useState("");
  const [editDescricao, setEditDescricao] = useState("");

  const fetchNoticias = async () => {
    try {
      const response = await api.get("noticia");
      setNoticias(response.data);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
    }
  };

  const createNoticia = async () => {
    try {
      const response = await api.post("noticia", {
        titulo,
        descricao,
      });
      setNoticias([...noticias, response.data]);
      setTitulo("");
      setDescricao("");
    } catch (error) {
      console.error("Erro ao criar notícia:", error);
    }
  };

  const updateNoticia = async (id: number) => {
    try {
      const response = await api.put("noticia", {
        id,
        titulo: editTitulo,
        descricao: editDescricao,
      });
      setNoticias(
        noticias.map((noticia) => (noticia.id === id ? response.data : noticia))
      );
      setEditId(null);
      setEditTitulo("");
      setEditDescricao("");
    } catch (error) {
      console.error("Erro ao atualizar notícia:", error);
    }
  };

  const deleteNoticia = async (id: number) => {
    try {
      await api.delete(`noticia/${id}`);
      setNoticias(noticias.filter((noticia) => noticia.id !== id));
    } catch (error) {
      console.error("Erro ao deletar notícia:", error);
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  return (
    <div>
      <h1>Notícias</h1>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
      />
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição"
      />
      <button onClick={createNoticia}>Adicionar Notícia</button>
      <ul>
        {noticias.map((noticia: any) => (
          <li key={noticia.id}>
            {editId === noticia.id ? (
              <div>
                <input
                  type="text"
                  value={editTitulo}
                  onChange={(e) => setEditTitulo(e.target.value)}
                  placeholder="Título"
                  min={5}
                />
                <input
                  type="text"
                  value={editDescricao}
                  onChange={(e) => setEditDescricao(e.target.value)}
                  placeholder="Descrição"
                  min={5}
                />
                <button onClick={() => updateNoticia(noticia.id)}>
                  Salvar
                </button>
                <button onClick={() => setEditId(null)}>Cancelar</button>
              </div>
            ) : (
              <div>
                <h2>{noticia.titulo}</h2>
                <p>{noticia.descricao}</p>
                <button
                  onClick={() => {
                    setEditId(noticia.id);
                    setEditTitulo(noticia.titulo);
                    setEditDescricao(noticia.descricao);
                  }}
                >
                  Editar
                </button>
                <button onClick={() => deleteNoticia(noticia.id)}>
                  Deletar
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Noticias;
