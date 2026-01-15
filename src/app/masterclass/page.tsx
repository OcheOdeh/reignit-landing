export default function MasterclassPage() {
    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <iframe
                src="https://reignit-masterclass-vbwyprhefam4dxs54g6smk.streamlit.app/?embed=true"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                }}
                title="Reignit Masterclass"
            />
        </div>
    );
}
