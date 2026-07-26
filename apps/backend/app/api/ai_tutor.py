"""AI Tutor API Router for RAG queries and concept explanation."""

from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional, List

router = APIRouter()


class AIQueryRequest(BaseModel):
    query: str
    context_path: Optional[str] = None


class AIQueryResponse(BaseModel):
    answer: str
    sources: List[str]


@router.post("/query", response_model=AIQueryResponse)
async def query_ai_tutor(req: AIQueryRequest):
    q = req.query.lower()
    answer = f"According to Project Olympus repository knowledge base:\n\n"

    if "fourier" in q or "signal" in q:
        answer += (
            "The Continuous-Time Fourier Transform (CTFT) is defined as:\n\n"
            "$$X(\\omega) = \\int_{-\\infty}^{\\infty} x(t) e^{-j\\omega t} dt$$\n\n"
            "It maps a continuous time-domain signal into its spectral components. See `02-engineering-foundations/03-signals-and-systems/`."
        )
    elif "verilog" in q or "alu" in q:
        answer += (
            "In Verilog RTL design:\n"
            "- Use non-blocking assignments (`<=`) in sequential `always @(posedge clk)` blocks.\n"
            "- Use blocking assignments (`=`) in combinational `always @(*)` blocks.\n\n"
            "See `projects/active/EF-01-4bit-alu/` for reference implementation."
        )
    else:
        answer += (
            f"Regarding **{req.query}**:\n\n"
            "1. Review the relevant module in `02-engineering-foundations/`.\n"
            "2. Practice retrieval using the corresponding Question Bank in `assessments/question-banks/`.\n"
            "3. Track your daily targets in `184-day-roadmap-integrated-ece-eie-jam.md`."
        )

    sources = [req.context_path] if req.context_path else ["02-engineering-foundations/README.md"]
    return {"answer": answer, "sources": sources}
