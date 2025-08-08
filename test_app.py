import pytest
from app import multiply

def test_multiply():
    """
    Test hàm multiply với các trường hợp khác nhau
    """
    assert multiply(3, 4) == 12
    
    assert multiply(0, 5) == 0
    assert multiply(1, 10) == 10
    assert multiply(-2, 3) == -6
    assert multiply(7, 8) == 56

def test_multiply_with_zero():
    """
    Test nhân với số 0
    """
    assert multiply(0, 0) == 0
    assert multiply(5, 0) == 0
    assert multiply(0, 5) == 0

def test_multiply_with_negative():
    """
    Test nhân với số âm
    """
    assert multiply(-1, -1) == 1
    assert multiply(-3, 4) == -12
    assert multiply(3, -4) == -12 