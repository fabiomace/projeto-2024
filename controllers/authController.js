const login = (req, res) => {
    const (email, senha) = req.body;
    
        if (email === 'admin@exemplo.com' && senha === '12345678') {
            return res.status(200).json
        }
}