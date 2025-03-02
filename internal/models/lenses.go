package models

type Lenses struct {
	ID       int      `gorm:"primaryKey;autoIncrement"`
	Value    *float64 `gorm:"type:decimal(4,2);default:NULL"`
	LensType *string  `gorm:"type:enum('CONCAVE SPHERE', 'CONCAVE CYLINDER');default:NULL"`
}

func (Lenses) TableName() string {
	return "lenses"
}
