module.exports = {
	
	QueryUsuario: function (usuario, ip) {
		return {
			nome:usuario.Nome,
			email:usuario.Email,
			nomeEmpresa:usuario.NomeEmpresa,
			tipo:usuario.Tipo,
			dataFormatada:usuario.DataFormatada,
			dataEnvio: new Date(usuario.DataEnvio).toISOString(),
			GUID:usuario.GUID,
			ip: ip
		}
	},
	
	QueryMensagem: function (mensagem) {
		return {
			nomeUsuario:mensagem.NomeUsuario,
			mensagem:mensagem.Mensagem,
			dataFormatada:mensagem.DataFormatada,
			dataEnvio:new Date(mensagem.DataEnvio).toISOString(),
			enviouEmail:mensagem.EnviouEmail,
			treinouIntencao:mensagem.TreinouIntencao,
			criouIntencao:mensagem.CriouIntencao,
			enviouEntidade:mensagem.EnviouEntidade,
			enviouDialogo:mensagem.EnviouDialogo,
			fezOrcamento:mensagem.FezOrcamento,
			viuProdutos:mensagem.ViuProdutos,
			interesseAgenda:mensagem.InteresseAgenda,
			interesseGenial:mensagem.InteresseGenial,
			interesseSGAE:mensagem.InteresseSGAE,
			interesseVagas:mensagem.InteresseVagas,
			vagaVisualizada:mensagem.VagaVisualizada,
			marcouCompromisso:mensagem.MarcouCompromisso,
			intencao:mensagem.Intencao,
			entidade:mensagem.Entidade,
			origem:mensagem.Origem,
			GUID:mensagem.GUID
		}
	},
	
	
	QueryIntencao: function (intencao) {
		
		
	},
	
	QuerySalvarUsoRecurso: function (req) {
		return {
			Tipo:req.Tipo,
			GUID:req.GUID,
			dataInclusao:new Date(req.DataEnvio).toISOString()
		}
	},
	QuerySalvarEmail: function (req) {
		return {
			Nome:req.Nome,
			Email:req.Email,
			Empresa:req.Empresa,
			Mensagem:req.Mensagem,
			GUID:req.GUID,
			DataEnvio:new Date(req.DataEnvio).toISOString()
		}
	}
}