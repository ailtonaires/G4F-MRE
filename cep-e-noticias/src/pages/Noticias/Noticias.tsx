import React, { useEffect, useState } from "react";
import "./Noticias.css";
import { api } from "../../config/api";

const Noticias = () => {
  const [noticias, setNoticias] = useState([] as any[]);
  const [titulo, setTitulo] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitulo, setEditTitulo] = useState<string>("");
  const [editDescricao, setEditDescricao] = useState<string>("");
  const [error, setError] = useState<any | null>(null);

  const fetchNoticias = async () => {
    try {
      const response = await api.get("noticia");
      setNoticias(response.data);
    } catch (error: any) {
      console.log(error)
      setError(error.response.data.message || "Erro ao buscar notícias.");
    }
  };

  const createNoticia = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post("noticia", {
        titulo,
        descricao,
      });
      setNoticias([...noticias, response.data]);
      setTitulo("");
      setDescricao("");
    } catch (error: any) {
      console.log(error);
      console.log(error.response);
      setError(error.response.data.message || "Erro ao criar notícia.");
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
      setError("Erro ao atualizar notícia.");
    }
  };

  const deleteNoticia = async (id: number) => {
    try {
      await api.delete(`noticia/${id}`);
      setNoticias(noticias.filter((noticia) => noticia.id !== id));
    } catch (error) {
      setError("Erro ao deletar notícia.");
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  return (
    <div>
      <h1 className="title">Criar Notícia</h1>

      <form onSubmit={createNoticia} className="forms">
        <input
          className="input-title"
          type="text"
          value={titulo}
          onChange={(e) => {
            setTitulo(e.target.value);
            setError(null);
          }}
          placeholder="Título"
          // minLength={5}
          required
        />
        <input
          className="input-description"
          type="text"
          value={descricao}
          onChange={(e) => {
            setDescricao(e.target.value);
            setError(null);
          }}
          placeholder="Descrição"
          // minLength={5}
          required
        />
        <button type="submit" className="button-notice">
          {" "}
          Criar Notícia
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="notices">
        {noticias.map((noticia: any) => (
          <div key={noticia.id}>
            {editId === noticia.id ? (
              <form
                className="notices"
                onSubmit={(e) => {
                  e.preventDefault();
                  updateNoticia(noticia.id);
                }}
              >
                <input
                  className="input-title"
                  type="text"
                  value={editTitulo}
                  onChange={(e) => {
                    setEditTitulo(e.target.value);
                    setError(null);
                  }}
                  placeholder="Título"
                  minLength={5}
                  required
                />
                <input
                  className="input-description"
                  type="text"
                  value={editDescricao}
                  onChange={(e) => {
                    setEditDescricao(e.target.value);
                    setError(null);
                  }}
                  placeholder="Descrição"
                  minLength={5}
                  required
                />
                <button className="button-notice" type="submit">
                  Salvar
                </button>
                <button
                  className="button-notice"
                  onClick={() => setEditId(null)}
                  type="button"
                >
                  Cancelar
                </button>
              </form>
            ) : (
              <div className="noticia">
                <h2 className="titulo">{noticia.titulo}</h2>
                <p className="descricao">{noticia.descricao}</p>
                <button
                  className="button-notice"
                  onClick={() => {
                    setEditId(noticia.id);
                    setEditTitulo(noticia.titulo);
                    setEditDescricao(noticia.descricao);
                  }}
                >
                  Editar
                </button>
                <button
                  className="button-notice"
                  onClick={() => deleteNoticia(noticia.id)}
                >
                  Deletar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;
