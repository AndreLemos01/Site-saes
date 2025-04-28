import { useParams } from 'react-router-dom';

function EquipeDetalhesPage({ equipe }) {
  const { id } = useParams();  // Captura o id do membro pela URL
  const membro = equipe.find((m) => m.id === parseInt(id));

  if (!membro) {
    return <div>Funcionário não encontrado.</div>;
  }

  const handleEdit = () => {
    const nomeNovo = prompt("Digite o novo nome", membro.nome);
    const cargoNovo = prompt("Digite o novo cargo", membro.cargo);
    const descricaoNova = prompt("Digite a nova descrição", membro.descricao);

    // Atualiza os dados do membro
    // (Você pode implementar essa lógica para que o administrador faça as edições)
  };

  return (
    <section>
      <h2>{membro.nome} - Detalhes</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={membro.foto} alt={membro.nome} style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
        <h3>{membro.nome}</h3>
        <p>{membro.cargo}</p>
        <p>{membro.registro}</p>
        <p>{membro.descricao}</p>
        <h4>Currículo Completo:</h4>
        <p>{membro.curriculo}</p>
        <button onClick={handleEdit}>Editar</button>
      </div>
    </section>
  );
}

export default EquipeDetalhesPage;
